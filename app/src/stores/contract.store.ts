import { writable, derived, type Subscriber, type Writable } from 'svelte/store'
import { ethers } from 'ethers'

export const provider: Writable<ethers.providers.JsonRpcProvider | null> = writable()

export const contract = derived(provider, (values, set: Subscriber<ethers.Contract | null>) => {
    if (values !== null && values !== undefined) {
        console.log('setting contract', values)
        set(
            new ethers.Contract(
                '',
                JSON.stringify(''),
                values.getSigner()
            )
        );
    }
    return () => null
})
