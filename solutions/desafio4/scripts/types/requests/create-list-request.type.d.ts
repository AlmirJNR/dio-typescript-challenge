type CreateListRequest = {
    apiKey: string,
    sessionId: string,
    listName: string,
    description: string,
    language: string = 'en-US',
}

export default CreateListRequest;
