db = db.getSiblingDB('sample_db');

db.createCollection('sample_collection');

db.sample_collection.insertMany([{
        org: 'org1',
        filter: 'EVENT_A',
        addrs: 'http://rest_client_1:8080/wh'
    },
    {
        org: 'org2',
        filter: 'EVENT_B',
        addrs: 'http://rest_client_2:8081/wh'
    },
    {
        org: 'org3',
        filter: 'EVENT_C',
        addrs: 'http://rest_client_3:8082/wh'
    }
]);