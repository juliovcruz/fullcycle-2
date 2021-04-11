To start api:
kubectl apply -f nest-api/deploy.yaml
kubectl expose -f nest-api/deploy.yaml
kubectl port-forward service/nest-route-api 3000

To start front-end:
kubectl apply -f react-frontend/deploy.yaml
kubectl expose -f react-frontend/deploy.yaml
kubectl port-forward service/react-frontend 3001:3000