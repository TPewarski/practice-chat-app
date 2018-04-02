const rob = {
    id: 'a_123',
    userName: 'Rob',
    icon: 'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/grumpy-dog-11.jpg'
};

const laura = {
    id: 'b_123',
    userName: 'Laura',
    icon: 'https://a.wattpad.com/useravatar/missy-cat.256.470217.jpg'
};

const users = {
    a_123: { input: '', ...rob },
    b_123: { input: '', ...laura }
};

const messages = [
    {
        id: '123',
        timestamp: 1522688689366,
        sender: rob,
        recipient: laura,
        content: 'Hi, I am having trouble getting my computer to work properly. Can you help me?'
    },
    {
        id: '124',
        timestamp: 1522688713977,
        sender: laura,
        recipient: rob,
        content: 'I think I can help you! Have you tried turning it off and on again?'
    }
];

export { rob, laura, messages, users };
