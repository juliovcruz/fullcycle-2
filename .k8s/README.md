First use:
- kind create cluster

To start api:
- kubectl apply -f api/deploy.yaml
- kubectl expose -f api/deploy.yaml
- kubectl port-forward service/api 3000

To start front-end:
- kubectl apply -f react-frontend/deploy.yaml
- kubectl expose -f react-frontend/deploy.yaml
- kubectl port-forward service/front 3001:3000
