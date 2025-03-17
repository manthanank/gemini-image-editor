# Gemini Image Editor

A simple image editor using Google Gemini API.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/manthanank/gemini-image-editor.git
    cd gemini-image-editor
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Google Gemini API key:

    ```env
    GEMINI_API_KEY=your_google_gemini_api_key
    PORT=5000
    ```

4. Start the server:

    ```sh
    npm start
    ```

5. Open your browser and go to `http://localhost:5000`.

## API Endpoints

### Modify Image

- **URL:** `/api/image/modify`
- **Method:** `POST`
- **Description:** Modify an image based on the provided prompt.
- **Request:**
  - **Headers:** `Content-Type: multipart/form-data`
  - **Body:**
    - `prompt` (string): The prompt for image modification.
    - `image` (file): The image file to be modified.
- **Response:**
  - `200 OK`: Image modified successfully.
  - `400 Bad Request`: Prompt and image are required.
  - `500 Internal Server Error`: Failed to modify image.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
