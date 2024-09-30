# Twitch 7TV Chat Highlighter by Badge

## Description

This userscript highlights certain messages in Twitch chat based on user badges (7TV version). It specifically targets messages from users with badges like 'Verified', 'VIP', and 'Moderator' and highlights them with different background colors.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Click on the Tampermonkey icon in your browser toolbar and select "Create a new script..."
3. Copy the content of `userscript.js` and paste it into the new script window.
4. Save the script by clicking "File" > "Save" or by pressing `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac).

## Usage

1. Navigate to any Twitch channel.
2. The script will automatically start observing the chat for new messages.
3. Messages from users with specific badges ('Verified', 'VIP', 'Moderator') will be highlighted with different background colors:
   - 'Verified': Light purple background (`rgba(158, 104, 250, 0.2)`)
   - 'VIP': Light pink background (`rgba(221, 47, 173, 0.2)`)
   - 'Moderator': Light green background (`rgba(0, 159, 33, 0.2)`)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
