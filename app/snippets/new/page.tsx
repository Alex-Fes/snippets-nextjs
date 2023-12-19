import {db} from "@/src/db";
import {redirect} from "next/navigation";


export default function CreateSnippetPage() {
    async function createSnippet(formData: FormData) {
        'use server'

        const title = formData.get('title') as string
        const code = formData.get('code') as string

        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        })
        console.log(snippet)

        redirect('/')
    }



    return (
        <form action={createSnippet}>
            <h3 className={'font-bold m-3'}>Create a new snippet</h3>
            <div className={'flex flex-col gap-4'}>
                <div className={'flex gap-4'}>
                    <label htmlFor="title" className={'w-12'}>
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className={'border border-gray-400 rounded p-2 w-full'}/>
                </div>
                <div className={'flex gap-4'}>
                    <label htmlFor="code" className={'w-12'}>
                        Code
                    </label>
                    <textarea
                        name="code"
                        id="code"
                        className={'border border-gray-400 rounded p-2 w-full'}/>
                </div>
                <button type={'submit'} className={'rounded p-2 bg-blue-200'}>
                    Create
                </button>
            </div>
        </form>
    );
};

