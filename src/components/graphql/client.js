import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
        link: new HttpLink({
            uri: 'https://react-todo-hasura.hasura.app/v1/graphql',
            headers: {
                'x-hasura-admin-secret': 'raJ666czkOYSvUIdNH8QESqN8uJKsSmMQx45c77r7rFCkGAEQ5RPJ9CbTezPC2tW'
              }
        }),
        cache: new InMemoryCache(),
    });

