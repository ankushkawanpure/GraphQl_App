/**
 * Created by ankush on 8/13/17.
 */
import {buildSchema} from 'graphql';

const schema = buildSchema(`

    type Friend {
        id: ID,
        name: String,
        email: String
    }
    
    type Query {
        friend: Friend
    }
`);

export default schema;