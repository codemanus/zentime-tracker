import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import OptionMenu from './optionMenu'

// fake data generation from https://fake-generator.vercel.app/
const sites = [
    {
        id: '718110ea-b9d5-4489-9ba4-ea1374715fab',
        site: 'Partners with Family & Children Services',
        site_address: '65860 Kovacek Summit',
        site_zip: '50883',
        site_state: 'MT',
        site_phone: '337-583-5626',
    },
    {
        id: '62136018-9cfd-499f-91ec-61f60cecc477',
        site: 'Frontier Behavior Health Services',
        site_address: '965 Avery Wall',
        site_zip: '25270',
        site_state: 'RI',
        site_phone: '646-365-4976',
    },
    {
        id: '7bbe4f61-1076-48bb-b0e5-cd41577e335c',
        site: 'Eastern Washington University - Mental Health Services',
        site_address: '1000 Ward Lane',
        site_zip: '93795',
        site_state: 'LA',
        site_phone: '678-479-1673',
    },
]

export default function SiteTable() {
    const [selected, setSelected] = useState(sites[0])

    return (
        <div className="w-full px-4 py-6">
            <div className="mx-auto w-full">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                        Site Location
                    </RadioGroup.Label>
                    <div className="space-y-2">
                        {sites.map((sites) => (
                            <RadioGroup.Option
                                key={sites.id}
                                value={sites}
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
                                                        {sites.site}
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
                                                            {sites.site_address}
                                                            , {sites.site_state}
                                                            , {sites.site_zip}
                                                        </span>{' '}
                                                        <span aria-hidden="true">
                                                            &middot;
                                                        </span>{' '}
                                                        <span>
                                                            {sites.site_phone}
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
