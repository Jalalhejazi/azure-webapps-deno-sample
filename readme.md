
![Deploy to Azure](https://github.com/Jalalhejazi/azure-webapps-deno-sample/workflows/Deploy%20to%20Azure/badge.svg)


## How to generate AZURE_CREDENTIALS for-GitHub-workflows-actions

- https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md


Run on **bash** using https://shell.azure.com/bash

You must change:
- subscriptionid 
- rg
- app

```bash
subscriptionid="your-azure-subscription-id"
rg="deno-apps-2020"
app="https://deno-app-2020.azurewebsites.net"

az ad sp create-for-rbac --name $app --role contributor \
                            --scopes /subscriptions/$subscriptionid/resourceGroups/$rg \
                            --sdk-auth

echo "Store the above JSON as the value of a GitHub secret with a name, for example 'AZURE_CREDENTIALS'  "
```


## deno run on production mode

- Transpile from TypeScript (server.ts) to JavaScript (server.bundle.js)
- Run deno from server.bundle.js
- If success, then deploy, else debug

```bash

deno bundle server.ts server.bundle.js
deno run --allow-net --allow-env server.bundle.js
# Deploy to Azure Web Apps and run inside docker container  
```



## Conclusion

There's still a long time until Deno reaches a production-ready state, 
but I think it’s on the right path in order to be a better Javascript runtime than Node.js🔥.