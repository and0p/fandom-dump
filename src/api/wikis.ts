import { AxiosInstance } from "axios";

export interface Wiki {
    wiki_id:                number;
    dbname:                 string;
    sitename:               string;
    url:                    string;
    domain:                 string;
    title:                  string;
    founding_user_id:       number;
    public:                 string;
    lang:                   string;
    lang_id:                number;
    vertical_id:            number;
    vertical_name:          string;
    cluster:                string;
    created_at:             Date;
    deleted:                string;
    is_test_wiki:           string;
    fc_community_id:        string;
    is_kid_wiki:            string;
    is_kid_wiki_by_founder: null;
    is_kid_wiki_by_staff:   null;
    wiki_manager:           string;
}

export const generateApi = (api: AxiosInstance) => {
    return {
        getWikis: async (startingId?: number) => getWikis(api, startingId)
    }
}

export const getWikis = async (api: AxiosInstance, startingId?: number): Promise<Wiki[]> => {
    const res = await api.get('DWDimension/wikis', {
        params: {
            'after_wiki_id': startingId
        }
    }) as Wiki[];
    return res;
};
