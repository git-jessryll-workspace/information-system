

export default function RequestFormItem({ rf }: any) {
    const textColor:any = {
        "PENDING": 'text-yellow-700',
        "IN-PROGRESS": 'text-blue-500',
        "INACTIVE": 'text-gray-400',
        "COMPLETED": 'text-green-700'
    }
    return <div className="px-1 py-2 grid grid-cols-4 font-bold text-gray-800">
        <div>
            <h3 className="font-bold">
                {rf.customer_name}
            </h3>
            <p className="text-xs text-gray-400">Customer Name</p>
        </div>
        <div>
            <h3>{rf.service_name}</h3>
            <p className="text-xs">Ref. No. {rf.referral_number}</p>
        </div>
        <div>
            <h3>{rf.prepared_by || 'N/A'}</h3>
            <p className="text-xs text-gray-400">Prepared By</p>
        </div>
        <div>
            <h3 className={`${textColor[rf.status]} font-bold`}>{rf.status}</h3>
            <p className="text-xs">{new Date(+rf.timestamp).toDateString()}</p>
        </div>
    </div>
}