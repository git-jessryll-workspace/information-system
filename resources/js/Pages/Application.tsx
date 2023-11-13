import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Application = ({ auth }: PageProps) => {
    return <Authenticated user={auth.user}>
        <Head title="Application"/>
        <div>
            Application 
        </div>
    </Authenticated>
}

export default Application;