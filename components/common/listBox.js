import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'

const site = [
    { id: 1, name: 'Partners with Families & Children' },
    { id: 2, name: 'Frontier Behavioral Health' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SiteListbox() {
    const [selectedSite, setSelectedSite] = useState(site[0])

    return (
        <Listbox value={selectedSite} onChange={setSelectedSite}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700 dark:text-gray-100 py-1">
                        Choose a site
                    </Listbox.Label>
                    <div className="mt-1 relative rounded shadow-sm">
                        <Listbox.Button className="relative w-full cursor-default rounded border border-gray-300 bg-white text-black  py-2 pl-3 pr-10 text-left shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-sm">
                            {selectedSite.name}
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {site.map((site) => (
                                    <Listbox.Option
                                        key={site.id}
                                        value={site}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? 'text-white bg-cyan-700'
                                                    : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? 'font-semibold'
                                                                : 'font-normal',
                                                            'ml-3 block truncate'
                                                        )}
                                                    >
                                                        {site.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? 'text-white'
                                                                : 'text-cyan-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
