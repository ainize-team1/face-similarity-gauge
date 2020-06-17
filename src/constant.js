const Status = {
    'NONE': 0,
    'LOADING_MODEL': 1,
    'LOADING_IMAGE': 2,
    'GAUGING': 3,
};

const StatusMsg = {
    [Status.NONE]: '',
    [Status.LOADING_MODEL]: 'Loading model...',
    [Status.LOADING_IMAGE]: 'Loading image...',
    [Status.GAUGING]: 'Gauging...',
};

module.exports = {
    Status,
    StatusMsg,
};
