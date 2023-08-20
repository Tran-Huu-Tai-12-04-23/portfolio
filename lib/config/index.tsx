import { connect, connection } from 'mongoose';
const MONGO_URI =
    process.env.DB_URL ||
    'mongodb+srv://huutai:tai2k300@cluster0.xbemtzm.mongodb.net/myPortfolio?retryWrites=true&w=majority';

const options: any = {
    useUnifiedTopology: true,

    useNewUrlParser: true,
};

export const connectToDatabase = async () => {
    if (!connection.readyState) {
        console.log('Connecting to ', MONGO_URI);
        connect(MONGO_URI, options);
    }
};
