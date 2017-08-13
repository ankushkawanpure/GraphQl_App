/**
 * Created by ankush on 8/13/17.
 */
import express from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {

    res.send("Yo server stated");
});

const root = { friend : () => {
    return {
        "id": 223232,
        "name": "Ankush Kawanpure",
        "email": "aak3988@rit.edu",
    }
}};

app.use('/graphql', graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {console.log("running graph ql on localhost 3000")});
