# Sendfiles

## Description

Website that allows you to upload files through a link and you can share it with whoever you need.

You can copy the URL address in any browser and you will be able to download the file.

It is a system similar to the old Firefox Send.

## 💻 Stack Software

- [Vite](https://vitejs.dev/): Frontend build tool to create web projects.
- [React](https://es.reactjs.org/): Open-source JavaScript frontend library for creating user interfaces, particularly for SPA.
- [TypeScript](https://www.typescriptlang.org/): Strongly typed programming language that builds on JavaScript.
- [Supabase](https://supabase.com/): Open-source backend with the necessary services to build a product.
- [Vitest](https://vitest.dev/): Unit test framework powered by Vite.

## 📕 Definitions

## 📋 Functional Requirements

### Login

- User will be able to login to the website using username and password

### Upload files

- It is not neccesary to be registered in the system to upload files.

### Download files

- The user who receives the file will not need a user account to download the file.

- In case the link requires a password. You just need to enter the password provided by the user that who has uploaded the file.

## ⛔ Constraints

- If you do not have a registered user account, the size of the files to be uploaded, will be limited to 1 MB.

- If the user is registered, the size of the files to be uploaded, will be limited to 10 MB.

- If the user is registered, he will be able to add a password to the files he wants to send

- If the user is registered, he will be able to limit the number of times that other users will be able to download the files sent through the generated link (from 1 to 20 downloads per link).
