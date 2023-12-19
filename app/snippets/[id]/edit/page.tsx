
interface EditSnippetPageProps {
    params: {
        id: string
    }
}

export default function EditSnippetPage(props: EditSnippetPageProps) {
    const snippetId = parseInt(props.params.id)
    return (
        <div>
            <h1>Edit a snippet - {snippetId}</h1>
        </div>
    )
}