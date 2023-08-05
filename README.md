# 🔥 Firebase PWA Starter
This is an opinionated Progressive Web App (PWA) starter. This template focuses on emulating a seamless native mobile experience, ensuring there's no unnecessary overscroll. Get ready to build powerful PWAs with a touch of elegance!

## Tech Stack
React PWA with Material UI and Firebase

## Getting Started

### Local Development
Follow these steps to set up the project for local development:

1. After completing the Firebase setup, run the command to spin up the PWA starter:
    ```bash
    npx create-react-app my-app --template cra-template-firebase-pwa-starter
    ```
    or if you are already in a new directory for your project
    ```bash
    npx create-react-app . --template cra-template-firebase-pwa-starter
    ```
    This also installs all the necessary dependencies to get you started.

2. Start the development server:

    ```bash
    npm start
    ```
3. Congratulations! Now you have a working PWA. Now if you want to deploy your PWA on Firebase, please follow the guide in the next few sections.

## Optional
### Firebase Setup
First setup your project in Firebase

1. Create a <a href="https://firebase.google.com/">Firebase account</a>
2. Go to your <a href="https://console.firebase.google.com/">Firebase Console</a>
3. Create a new project. <a href="https://www.firebasemaster.com/setup/how-to-create-firebase-project">[guide]</a>
4. Register your app <a href="https://www.firebasemaster.com/setup/how-add-web-app-to-firebase-project">[guide]</a>
### Deployment

Please make sure you have a <a href="#firebase-setup">firebase project</a> setup.

To deploy your application to a staging environment and access it on your mobile device, follow these steps.

Make sure you have <a href="https://firebase.google.com/docs/cli">Firebase CLI</a> installed

```bash
npm install -g firebase-tools
```

If you haven't already, log in to Firebase and initialize it in your repository.

For a step-by-step deployment guide, check out this <a href="https://www.knowledgehut.com/blog/web-development/deploying-react-app-to-firebase">article</a>

Once initialization is completed, you can use the following scripts for deployment:

### `deploy:dev`
Deploys to the Firebase `development` environment for preview.

### `deploy:prod`
Deploys to the Firebase `live` production environment.

### `deploy:list`
Shows a list of running environments.

## Building New Pages

When creating new pages, you'll should create the page components in the `src/views` folder. These components serve as the main content body.

![image](https://github.com/nc1z/react-pwa-starter/assets/111836326/9e67e871-8bff-4d34-a998-196b14a23eff)

The parent container uses a class called `PageContainer`, which enables overscroll, touch action, and overflow.

```tsx
const AboutPage = () => {
    return (
        <div className="PageContainer">
            // Child elements and components here
        </div>
    )
}

export default AboutPage
```

Take a look at the `src/views/Home` component for reference. 

For style customizations, check out `src/App.css`.


