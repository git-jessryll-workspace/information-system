import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import RequestFormItem from "./AppForms/Partials/RequestFormItem";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

const appForms =
    [
        {
            "id": "1",
            "customer_name": "John Doe",
            "status": "PENDING",
            "timestamp": "1622016000",
            "referral_number": "A1B2C3D4",
            "prepared_by": null,
            "service_name": "Service A"
        },
        {
            "id": "2",
            "customer_name": "Jane Smith",
            "status": "IN-PROGRESS",
            "timestamp": "1622102400",
            "referral_number": "E5F6G7H8",
            "prepared_by": "Alice",
            "service_name": "Service B"
        },
        {
            "id": "3",
            "customer_name": "Mike Johnson",
            "status": "COMPLETED",
            "timestamp": "1622188800",
            "referral_number": "I9J1K2L3",
            "prepared_by": "Bob",
            "service_name": "Service C"
        },
        {
            "id": "4",
            "customer_name": "Sarah Williams",
            "status": "INACTIVE",
            "timestamp": "1622275200",
            "referral_number": "M4N5O6P7",
            "prepared_by": null,
            "service_name": "Service D"
        },
        {
            "id": "5",
            "customer_name": "Chris Brown",
            "status": "PENDING",
            "timestamp": "1622361600",
            "referral_number": "Q8R9S1T2",
            "prepared_by": null,
            "service_name": "Service E"
        },
        {
            "id": "6",
            "customer_name": "Emily Davis",
            "status": "IN-PROGRESS",
            "timestamp": "1622448000",
            "referral_number": "U3V4W5X6",
            "prepared_by": "Alice",
            "service_name": "Service F"
        },
        {
            "id": "7",
            "customer_name": "David Wilson",
            "status": "COMPLETED",
            "timestamp": "1622534400",
            "referral_number": "Y7Z8A9B1",
            "prepared_by": "Bob",
            "service_name": "Service G"
        },
        {
            "id": "8",
            "customer_name": "Olivia Taylor",
            "status": "INACTIVE",
            "timestamp": "1622620800",
            "referral_number": "C2D3E4F5",
            "prepared_by": null,
            "service_name": "Service H"
        },
        {
            "id": "9",
            "customer_name": "Andrew Anderson",
            "status": "PENDING",
            "timestamp": "1622707200",
            "referral_number": "G6H7I8J9",
            "prepared_by": null,
            "service_name": "Service I"
        },
        {
            "id": "10",
            "customer_name": "Sophia Martinez",
            "status": "IN-PROGRESS",
            "timestamp": "1622793600",
            "referral_number": "K1L2M3N4",
            "prepared_by": "Alice",
            "service_name": "Service J"
        },
        {
            "id": "11",
            "customer_name": "James Thompson",
            "status": "COMPLETED",
            "timestamp": "1622880000",
            "referral_number": "O5P6Q7R8",
            "prepared_by": "Bob",
            "service_name": "Service K"
        },
        {
            "id": "12",
            "customer_name": "Ava Moore",
            "status": "INACTIVE",
            "timestamp": "1622966400",
            "referral_number": "S9T1U2V3",
            "prepared_by": null,
            "service_name": "Service L"
        },
        {
            "id": "13",
            "customer_name": "Logan Clark",
            "status": "PENDING",
            "timestamp": "1623052800",
            "referral_number": "W4X5Y6Z7",
            "prepared_by": null,
            "service_name": "Service M"
        },
        {
            "id": "14",
            "customer_name": "Isabella Rodriguez",
            "status": "IN-PROGRESS",
            "timestamp": "1623139200",
            "referral_number": "A1B2C3D4",
            "prepared_by": "Alice",
            "service_name": "Service N"
        },
        {
            "id": "15",
            "customer_name": "Benjamin Lee",
            "status": "COMPLETED",
            "timestamp": "1623225600",
            "referral_number": "E5F6G7H8",
            "prepared_by": "Bob",
            "service_name": "Service O"
        },
        {
            "id": "16",
            "customer_name": "Mia Hall",
            "status": "INACTIVE",
            "timestamp": "1623312000",
            "referral_number": "I9J1K2L3",
            "prepared_by": null,
            "service_name": "Service P"
        },
        {
            "id": "17",
            "customer_name": "Lucas Young",
            "status": "PENDING",
            "timestamp": "1623398400",
            "referral_number": "M4N5O6P7",
            "prepared_by": null,
            "service_name": "Service Q"
        },
        {
            "id": "18",
            "customer_name": "Avery Lewis",
            "status": "IN-PROGRESS",
            "timestamp": "1623484800",
            "referral_number": "Q8R9S1T2",
            "prepared_by": "Alice",
            "service_name": "Service R"
        },
        {
            "id": "19",
            "customer_name": "Evelyn Hall",
            "status": "COMPLETED",
            "timestamp": "1623571200",
            "referral_number": "U3V4W5X6",
            "prepared_by": "Bob",
            "service_name": "Service S"
        },
        {
            "id": "20",
            "customer_name": "Carter White",
            "status": "INACTIVE",
            "timestamp": "1623657600",
            "referral_number": "Y7Z8A9B1",
            "prepared_by": null,
            "service_name": "Service T"
        }
    ]

const RequestForm = ({ auth }: PageProps) => {
    return <Authenticated user={auth.user}>
        <Head title="Request Forms" />
        <div className="flex justify-center">
            <div className="border border-gray-400 w-full mx-8 rounded-md shadow-md">
                <div className="p-6 flex justify-between">
                    <div>
                        <h4 className="text-lg text-gray-700 font-bold">Request Forms</h4>
                        <p className="text-sm text-gray-500">List of request form from the customer.</p>
                    </div>
                    <div>
                        <PrimaryButton>Add Request Form</PrimaryButton>
                    </div>
                </div>
                <div className="px-6 flex space-x-2">
                    <div className="w-[22%]">
                        <TextInput className="w-full" placeholder="Search request keys" />
                    </div>
                    <div className="flex justify-end">
                        <div className="flex items-center space-x-2">
                            <div className="text-gray-700 font-bold mr-2">Filter By:</div>
                            <button className="flex justify-center px-4 border border-gray-300 py-1.5 rounded-md text-gray-700 font-bold">PENDING</button>
                            <button className="flex justify-center px-4 border border-gray-300 py-1.5 rounded-md text-gray-700 font-bold">COMPLETED</button>
                            <button className="flex justify-center px-4 border border-gray-300 py-1.5 rounded-md text-gray-700 font-bold">IN-PROGRESS</button>
                            <button className="flex justify-center px-4 border border-gray-300 py-1.5 rounded-md text-gray-700 font-bold">INACTIVE</button>
                            <div className="flex space-x-3">
                                <div className="flex items-center">
                                    <label className="text-sm">From:&nbsp;</label>
                                    <input type="date" className="text-gray-500 border border-gray-400 rounded-lg text-sm" />
                                </div>
                                <div className="flex items-center">
                                    <label className="text-sm">To:&nbsp;</label>
                                    <input type="date" className="text-gray-500 border border-gray-400 rounded-lg text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 divide-y">
                    {
                        appForms.map((form: any) => <RequestFormItem key={form.id} rf={form} />)
                    }
                </div>
            </div>
        </div>
    </Authenticated>
}

export default RequestForm;