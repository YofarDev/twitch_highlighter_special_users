// ==UserScript==
// @name         Twitch 7TV Chat Highlighter by Badge
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Highlights certain messages in Twitch chat based on user badge (7TV version)
// @author       You
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let currentObserver = null;

    // Function to observe Twitch chat for new messages
    function observeChat() {
        // Target the 7TV message container
        const chat = document.querySelector('.seventv-message-container');
        if (chat) {
            console.log('Chat found, starting observation...');
            currentObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && node.querySelector) {
                            // Look for all user badges in the message
                            const badgeElements = node.querySelectorAll('.seventv-chat-badge img');
                            if (badgeElements.length > 0) {
                                const badges = Array.from(badgeElements).map(badge => badge.getAttribute('alt'));
                                console.log('Badges:', badges);

                                // Check for badges in priority order
                                if (badges.includes('Verified')) {
                                    node.style.backgroundColor = 'rgba(158, 104, 250, 0.2)';
                                } else if (badges.includes('VIP')) {
                                    node.style.backgroundColor = 'rgba(221, 47, 173, 0.2)';
                                } else if (badges.includes('Moderator')) {
                                    node.style.backgroundColor = 'rgba(0, 159, 33, 0.2)';
                                }
                            }
                        }
                    });
                });
            });
            // Start observing the chat container
            currentObserver.observe(chat, { childList: true, subtree: true });
        } else {
            console.log('7TV chat container not found.');
        }
    }

    // Function to initialize or reinitialize the chat observer
    function initializeChatObserver() {
        // Disconnect the current observer if it exists
        if (currentObserver) {
            currentObserver.disconnect();
        }
        // Wait for the chat to load, then run the observer
        const chatInterval = setInterval(() => {
            const chat = document.querySelector('.seventv-message-container');
            if (chat) {
                clearInterval(chatInterval);
                observeChat();
            } else {
                console.log('Waiting for 7TV chat to load...');
            }
        }, 1000);
    }

    // Initialize the chat observer when the script loads
    initializeChatObserver();

    // Re-initialize the chat observer when the URL changes
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            console.log('URL changed, reinitializing chat observer...');
            initializeChatObserver();
        }
    }).observe(document, {subtree: true, childList: true});
})();
