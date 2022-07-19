import DataRequest from "../types/requests/data-request.type";

abstract class HttpClient {
    static async get(requestData: DataRequest) {
        const response = await fetch(requestData.url, {
            method: requestData.method,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(requestData.body),
        });

        return await response.json();
    }
}

export default HttpClient;
