# document-holder
# Secure & Share Govt Document with Family Members

## Overview
This project is a secure platform for storing and sharing government documents with family members. It allows users to upload, manage, and share important documents while ensuring privacy and security. The application is built using **HTML, CSS, JavaScript, and Firebase**.

## Features
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Document Upload & Storage**: Users can upload and store government-related documents securely.
- **Access Control**: Users can share documents with authorized family members.
- **Download & View Documents**: Authorized users can view and download shared documents.
- **Real-time Database**: Firebase Firestore is used to manage document metadata and access permissions.
- **Responsive Design**: Works across different devices, including mobile and desktop.
- **Security & Encryption**: Ensures document confidentiality with Firebase security rules.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Authentication, Firebase Firestore, Firebase Storage
- **Hosting**: Firebase Hosting (optional)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/deeku728/document-holder.git
   ```
2. Navigate to the project directory:
   ```sh
   cd document-holder
   ```
3. Open `index.html` in your browser.
4. Configure Firebase:
   - Create a Firebase project.
   - Enable Authentication and Firestore Database.
   - Configure Firebase Storage for file uploads.
   - Replace the Firebase config in `config.js` with your Firebase project details.

## Usage
1. Register/Login using Firebase Authentication.
2. Upload government documents securely.
3. Share documents with specific family members using their email.
4. View and download shared documents.
5. Manage permissions and remove document access when necessary.

## Future Enhancements
- Implement **role-based access control** for document security.
- Add **email notifications** when documents are shared.
- Enable **multi-factor authentication** for added security.
- Introduce **document expiry and auto-delete options**.

## License
This project is open-source and available under the **MIT License**.

## Contact
For queries, reach out at [your.email@example.com](mailto:your.email@example.com).
