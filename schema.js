/**
 * Created by ankush on 8/13/17.
 */
import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

export default schema;