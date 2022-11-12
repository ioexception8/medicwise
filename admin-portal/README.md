<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/198871216-02ccb49f-01a6-4263-b13d-1c84dac34610.png" alt"BANNER" />
</p>

**Medicwise Portal** is built for the doctors to see their `bookings and upcoming/pending schedules` with the patients. It comes with Firebase authentication functionality and real-time database updates. 
Patients who want to consult any doctor can appoint them by filling out the mental screening form telling all the necessary details about their problem.
The doctor can see all the crucial pieces of information from the dashboard after logging in to the portal.

## Authentication
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/198871706-0f35174c-874e-4cfa-ba6b-05e34814a466.jpg" alt"AUTH" />
</p>

The authentication functionality uses `Google Firebase's email & password authentication`. The users can add their email as bound by the security best practice rules.
- The email should be valid. Otherwise, Firebase will refuse to create the user.
- The password should be tough & greater than six characters long.

After the user is created, they can log in to the portal via the sign in tab. To take care of the user, we have implemented a **forget password** functionality so that they can easily reset their password via their respective emails.

## Dashboard

<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/198872788-18fa70b1-43a2-4941-a53f-7e9c042034c0.jpg" height="600" alt"Dashboard" />
</p>

The dashboard is the place where all magic begins. After the doctor logs in, they can **see all their bookings and details submitted by the patients** from the medicwise website.
There is a separate card for the patient that shows their,
- Name and Age
- Registered Email
- Telephone Number
- Necessary details about the problem/disease.
- The schedule *(to be implemented)* so that doctor can schedule the call from there only.

## Future Prospects

If we talk about the prospects, we will implement the following features into our admin portal.
- Enhancing the current **UX design**.
- Functionality for the doctors to **create and edit their profiles**.
- Upgrading the portal where doctors can **see previous appointments and messages**.
- A **scheduling mechanism** so that doctors can schedule the meetings along the go.

#### Click [Figma Design](https://www.figma.com/file/bCcfmEx7PWEMFTt79CepQY/MOBILE-MEDICWISE?node-id=0%3A1) to see the design of the upcoming Medicwise Admin Portal.

<hr />

<h3 align="center">
A good doctor treats the disease, but the great doctor treats the patient who has the disease.
</h3>
