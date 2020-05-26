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
