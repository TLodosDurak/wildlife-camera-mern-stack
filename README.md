
# Wildlife Camera Project

## Overview

This project is a web application for monitoring wildlife using cameras. Built with the MERN stack (MongoDB replaced by Supabase, Express.js, React, and Node.js), it allows users to view and manage images captured by remote cameras set up in various wildlife habitats.

## Features

- **Live Camera Feed**: View real-time footage from wildlife cameras.
- **Image Gallery**: Browse through captured images, sorted by date and time.
- **Notifications**: Receive alerts for new activity detected by the cameras.
- **User Management**: Secure login and user management capabilities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- Supabase account
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TLodosDurak/wildlife-camera-mern-stack.git
   ```
2. Install dependencies for the server:
   ```bash
   cd wildlife-camera-mern-stack
   npm install
   ```
3. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```
4. Set up your Supabase project and obtain the necessary API keys and URLs.
5. Create a `.env` file in the root directory and add the necessary environment variables:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_KEY=your_supabase_key
   ```
6. Start the server:
   ```bash
   npm start
   ```
7. In a new terminal, start the client:
   ```bash
   cd client
   npm start
   ```

## Usage

Once the application is running, navigate to `http://localhost:3000` to view the web interface. You can register a new account or log in to access the camera feeds and image gallery.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any questions, please feel free to contact us at [temellodos@gmail.com](temellodos@gmail.com).
