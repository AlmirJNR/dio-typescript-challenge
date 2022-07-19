type DataRequest = {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: Object,
}

export default DataRequest;
