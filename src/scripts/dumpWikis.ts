import { connect } from 'mongoose';

import * as apis from '../api/index';
import { WikiModel } from '../mongoose/wikis';

const api = apis.createFandomAPI();

const dumpWikis = async (fromLastId: boolean = true) => {
    console.log('Connecting to mongoose...');
    await connect('mongodb://127.0.0.1:27017/fandom');
    console.log('Connected to mongoose!');
    
    console.log('Starting to grab all wiki metadata...');
    
    let done = false;
    let lastWikiId = 0;
    let total = 0;

    if (fromLastId) {
        const last = await WikiModel.findOne().sort({wiki_id: -1});
        console.log(last);
        if (last) {
            lastWikiId = last.wiki_id;
        }
    }

    while (!done) {
        console.log(`Grabbing wikis starting with ID ${lastWikiId}...`);
        const res = await api.wiki.getWikis(lastWikiId);
        const length = res.data.length;
        console.log(`Got ${length} results.`);
        
        console.log(`Persisting ${length} records.`);
        await WikiModel.insertMany(res.data);
        console.log(`Successfully persisted.`)

        total = total + length;
        lastWikiId = res.data[length - 1].wiki_id;
        console.log(`Persisted ${total} total.`);

        if (length < 100) {
            console.log(`Looks like we're finished.`);
            done = true;
        }
    }


}

export default dumpWikis;