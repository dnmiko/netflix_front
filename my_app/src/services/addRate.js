import axios from 'axios';
import constants from '../const';
import getToken from '../resolvers/getToken';

export default (data) => {

    let { id, rate } = data;
    let newRate = `{rate:${rate}}`;


    return axios({
        url: constants.url + 'graphql',
        method: 'post',
        data: {
            query: `
                mutation{
                    AddRate(
                        id: "${id}",
                        data:${newRate}
                    )
                    {
                        _id,
                        name,
                        rate
                    }
                }
            `
        },
        headers: {
            'Authorization': 'JWT ' + getToken()
        }
    })
}