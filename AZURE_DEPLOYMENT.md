<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201483251-d0c307fb-f712-400c-b470-a808c168abee.png" alt="BANNER" />
</p>

## Why Azure App Service?
- Bring your code or container using the framework language of your choice.
- Run on Kubernetes, anywhere across Azure, on-premises, and any CNCF-conformant Kubernetes cluster through Azure Arc.
- Increase developer productivity with tight integration of Visual Studio Code and Visual Studio.
- Streamline CI/CD with Git, GitHub, GitHub Actions, Atlassian Bitbucket, Azure DevOps, Docker Hub, and Azure Container Registry.
- Reduce downtime and minimize risk for app updates by using deployment slots.

## Instructions to Deploy
<p align="center"><b>This walkthrough is provided to make sure that all the users are comfortable deploying their applications on the Azure Cloud.</b></p>

> **Note**
>: We will be going to see how to deploy the server. The process is exactly the same for client-end.

<hr />

1. Type **app services** in the search. Under **Services**, select **App Services**.
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201484048-bb2ca586-f7d9-4e3c-ba6d-7746ee8b87a8.png" alt="PORTAL SEARCH" />
</p>

2. In the **App Services** page, select **Create**.
3. In the **Basics** tab, under **Project details**, ensure the correct subscription is selected and then select to Create new resource group. Type *myResourceGroup* for the name.
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201484182-c1cd54c8-4346-4077-bc22-00cdaaca3f6b.png" alt="PROJECT DETAILS" />
</p>

4. Under **Instance details**, type a globally unique name for your web app and select **Code**. Select *Node 14/16 LTS* **Runtime stack**, an **Operating System**, and a **Region** you want to serve your app from.
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201484343-ed57492d-ced5-43f3-9bfb-3da30724c598.png" alt="INSTANCE DETAILS" />
</p>

5. Under **App Service Plan**, select **Create new** App Service Plan. Type *myAppServicePlan* for the name. To change to the Free tier, select **Change size**, select **Dev/Test** tab, select **F1**, and select the **Apply** button at the bottom of the page.
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201484494-4f3c52cc-331c-4a1a-9b10-e8a38a18e3e1.png" alt="PLAN DETAILS" />
</p>

6. Click on **Next : Deployment** at the bottom of the page.
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201484570-a30ee63d-43cf-4da8-b175-3d0c292a0212.png" alt="PLAN DETAILS" />
</p>

7. Under the **GitHub Actions details**, authorize your **GitHub account** after enabling the **Continuous Deployment**.
- Select the **organization** you have permissions to create and modify the repositories.
- Select the **repository** (*only for server*) that contains the server logic.
- Configure the **branch**.
<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/201484875-93e34ef6-0272-48f0-93c8-bfe10164ce1c.png" alt="CI CD" />
</p>

8. Select the **Review + create** button at the bottom of the page.

<hr />
