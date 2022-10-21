import SupervisorData from "../common/supervisorTable"

export default function SupervisorInformation() {
    return (
        <div className="px-4 py-6 sm:px-0">
            <div className="h-96 text-center">
                <h1 className="text-3xl">
                    Supervisor Information Form Location
                </h1>
                <SupervisorData />
                <div className="text-end px-4">
                    <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-gray-50  font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded"
                        type="submit"
                    >
                        Add Supervisor
                    </button>
                </div>
            </div>
        </div>
    )
}
