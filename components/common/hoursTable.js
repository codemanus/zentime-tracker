

export default function HoursTable(){


    return (
        <div className="flex flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded">
                        <table className="min-w-full">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Hours
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Individual Counseling or Psychotherapy
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            name="hours"
                                            id="hours"
                                            className="block w-full rounded border-gray-300 pl-7 pr-12 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                            placeholder="0.0"
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Diagnosis & Treatment of Couples,
                                        Families, Children
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            name="hours"
                                            id="hours"
                                            className="block w-full rounded border-gray-300 pl-7 pr-12 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                            placeholder="0.0"
                                        />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Group Therapy or Counseling
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            name="hours"
                                            id="hours"
                                            className="block w-full rounded border-gray-300 pl-7 pr-12 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                            placeholder="0.0"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}