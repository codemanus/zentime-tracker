import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import OptionMenu from './optionMenu'

const supervisor = [
    {
        id: 'e642a5c0-41c8-4d1c-a981-da251189bf0e',
        supervisor_firstName: 'Hildegard',
        supervisor_lastName: 'Bernhard',
        supervisor_zip: '01734-8221',
        supervisor_state: 'GA',
        supervisor_address: '78257 Metz Streets',
        supervisor_phone: '371-727-1818',
        supervisor_licenseType: 'LMFT',
        supervisor_title: 'Corporate Assurance Orchestrator',
        supervisor_licenseIssue: '2022-03-08T11:20:27.909Z',
        supervisor_licenseExpiry: '2023-03-16T09:30:17.574Z',
    },
    {
        id: 'a44b754d-ad2b-4ca6-b5ad-83dbca94c074',
        supervisor_firstName: 'Brook',
        supervisor_lastName: 'Marvin',
        supervisor_zip: '58601',
        supervisor_state: 'IL',
        supervisor_address: '769 Gennaro Mountains',
        supervisor_phone: '541-395-7127',
        supervisor_licenseType: 'LMHP',
        supervisor_title: 'Senior Factors Architect',
        supervisor_licenseIssue: '2021-12-10T19:45:16.294Z',
        supervisor_licenseExpiry: '2022-12-06T03:33:47.657Z',
    },
    {
        id: '503987f9-98a5-4624-9eb0-58a6125c4ed7',
        supervisor_firstName: 'Mylene',
        supervisor_lastName: 'Douglas',
        supervisor_zip: '15880',
        supervisor_state: 'MD',
        supervisor_address: '72481 Anika Dale',
        supervisor_phone: '371-749-6347',
        supervisor_licenseType: 'LMHC',
        supervisor_title: 'Dynamic Intranet Supervisor',
        supervisor_licenseIssue: '2022-09-20T05:11:05.844Z',
        supervisor_licenseExpiry: '2023-08-18T09:00:40.323Z',
    },
]

export default function SupervisorData() {
    const [selected, setSelected] = useState(supervisor[0])

    return (
        <div className="w-full px-4 py-6 text-start">
            <div className="mx-auto w-full">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                        Site Location
                    </RadioGroup.Label>
                    <div className="space-y-2">
                        {supervisor.map((supervisor) => (
                            <RadioGroup.Option
                                key={supervisor.id}
                                value={supervisor}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                            : ''
                                    }
                  ${
                      checked
                          ? 'bg-sky-900 bg-opacity-75 text-white'
                          : 'bg-white'
                  }
                    relative flex cursor-pointer rounded px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked
                                                                ? 'text-white'
                                                                : 'text-gray-900'
                                                        }`}
                                                    >
                                                        {supervisor.supervisor_firstName +
                                                            ' ' +
                                                            supervisor.supervisor_lastName}{' '}
                                                        <span aria-hidden="true">
                                                            &middot;
                                                        </span>{' '}
                                                        <span>{supervisor.supervisor_licenseType}</span>
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked
                                                                ? 'text-sky-100'
                                                                : 'text-gray-500'
                                                        }`}
                                                    >
                                                        <span>
                                                            {
                                                                supervisor.supervisor_address
                                                            }
                                                            ,{' '}
                                                            {
                                                                supervisor.supervisor_state
                                                            }
                                                            ,{' '}
                                                            {
                                                                supervisor.supervisor_zip
                                                            }
                                                        </span>{' '}
                                                        <span aria-hidden="true">
                                                            &middot;
                                                        </span>{' '}
                                                        <span>
                                                            {
                                                                supervisor.supervisor_phone
                                                            }
                                                        </span>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                        <OptionMenu />
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
