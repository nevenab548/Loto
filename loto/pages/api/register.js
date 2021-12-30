import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
    const {body} = await req.body
    console.log('username', username)
    const url = `http://localhost:3000/create-user`

    try {
        const response = await fetch(url, {body: body})

        if (response.ok) {
            const {id} = await response.json()
            return res.status(200).json({token: id})
        } else {
            const error = new Error(response.statusText)
            error.response = response
            throw error
        }
    } catch (error) {
        const {response} = error
        return response
            ? res.status(response.status).json({message: response.statusText})
            : res.status(400).json({message: error.message})
    }
}