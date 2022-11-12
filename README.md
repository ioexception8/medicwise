<p align="center">
<img src="https://user-images.githubusercontent.com/77505989/198878121-f5116248-8b4c-4baa-8302-c9cd262baf7f.png" alt="BANNER" />
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/77505989/198878368-1302bf31-3600-4348-a585-076930aefae8.png" alt="BANNER" />
</p>

## Why Medicwise?

<details>
  <summary><b>UNITED NATIONS SUSTAINABLE DEVELOPMENT GOAL 3</b></summary>
  
<br />

<p align="center">
<img src="https://user-images.githubusercontent.com/77505989/201485984-61b87f3b-7717-4d8f-91e8-f71e15fe3b09.jpg" alt="UNSDG" />
</p>

<p align="center">Ensuring healthy lives and promoting well-being at all ages is essential to sustainable development. The COVID-19 pandemic continues to spread human suffering.</p>

### Facts & Figures
- In 2020 and 2021, 14.9 million people were estimated to have died due to COVID-19 and its impact on health systems and society.
- Interruptions in essential health services were reported in 92 per cent of 129 countries surveyed at the end of 2021.
- As of May 2022, more than 80 per cent of people had received at least one dose of a vaccine in high-income countries but the proportion is only about 17 per cent in low-income countries.
- Between January 2020 and May 2021, the pandemic may have claimed the lives of 115,500 health and care workers worldwide.
- 7 million children missed out on vaccinations in 2020, 3.7 million more than in 2019 and the highest number since 2005.
- 1 million older children did not receive vaccines through the routine immunization programme in 2020, an increase from 13.6 million in 2019.

### Goals
- 3.1 By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births.
- 3.2 By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births.
- 3.3 By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases.
- 3.4 By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being.
- 3.5 Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol.

  <br />
  
</details>

- We have been forced to stay at home due to the pandemic, and people are doubtful about going out to consult doctors nowadays.
- People are opting for **online personal health care**.
- As a result, we developed a personal care web app that **allows patients to consult doctors from the comfort of their own homes**.
- There are over a million deaf & dumb people. There are over 75% of people are uneducated. 
- So we've devised Medicwise as a solution to the problem, so that it is **accessible to everyone, regardless of their disabilities, to consult a doctor online**.

<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/198884367-89ab757c-668f-45b5-b112-b1ac2e300dc5.jpg" alt="feature" height="500" />
</p>

## Features
- There is a separate <a href="https://github.com/kartikmehta8/medicwise/tree/main/admin-portal">Admin Portal</a> dedicated for the doctors. **[Click on the link for detailed information and implementation of the portal]**
- Each portion of the Medicwise will have its own *Room ID*, given to patients by the respective doctors they want to consult. Each doctor will have their own *medic code* so that patients can appoint them.
- There is a **chat room** where you can communicate with your doctor.
- There is a **video room** where you may communicate with your doctor via video call.
- Lastly, there is a **gesture room** where mute and uneducated people can communicate with doctors using sign language.
- If the doctor doesn't understand sign language, we have **machine learning models implemented using tensorflow that can decode sign language into text**.
- The patient authentication is facilitated with <a href="https://auth0.com">Auth0</a> Authentication. **[with custom Email/Password or Google]**
- The seamless payment gateway implemented using <a href="https://stripe.com/en-in">Stripe</a>.

<details>
<summary><b>TECHNOLOGIES</b></summary>

<br />

|               |                |              |
| ------------- |:--------------:| ------------:|
| HTML          | SCSS           | Javascript   |
| ReactJS       | NodeJS         | ExpressJS    |
| TailwindCSS   | Bootstrap      | MaterialUI   |
| Firebase      | Auth0          | Stripe       |
| SocketIO      | Netlify        | TensorflowJS |
| Azure         | Github Actions | App Service  |
|               |                |              |

</details>

## Deployment
The website (*client & server*) is deployed on **Microsoft Azure**. The `Azure App Service` is what we have used to ease our deployment task.

#### Core features of Azure App Service are:
- Fully managed service with built-in infrastructure maintenance, security patching, and scaling.
- Built-in continuous integration and continuous delivery (CI/CD) and zero-downtime deployments.
- Support for virtual networks, and ability to run in an isolated and dedicated App Service Environment.
- Rigorous security and compliance standards, including SOC and PCI, for seamless deployments in the cloud, in Azure Government, and on premises.

> **Note**
> There are three client & one server endpoints.
- Custom Domain - <a href="https://www.medicwise.us">www.medicwise.us</a>
- Azure App Service Domain - <a href="https://medicwise-portal.azurewebsites.net">medicwise-portal.azurewebsites.net</a>
- Netlify Domain - <a href="https://medicwise-portal.netlify.app">medicwise-portal.netlify.app</a>
- Server Domain - <a href="https://medicwise.azurewebsites.net">medicwise.azurewebsites.net</a>

> Click on <a href="https://github.com/kartikmehta8/medicwise/blob/main/AZURE_DEPLOYMENT.md">**AZURE_DEPLOYMENT.md**</a> to see how to deploy the application on **Microsoft Azure Cloud**.

## Future Prospects
- Text-to-Gesture Encoding from Doctor to Client.
- Implementing a chat box in the video section.
- Implementing chat bot.
- Training our ML model to encode and decode many gestures.

<!--
## Run Locally
- Fork the repository.
- Clone repository to your local system.
- Install require node_modules using `npm install`.
- Open server-end in command prompt and execute `npm start` command.
- Open client-end in command prompt and execute `npm start` command.
- Open admin-portal in command prompt and execute `npm start` command.
-->

<hr />

<h3 align="center">
People pay the doctor for his trouble; for his kindness, they still remain in his debt.
</h3>
