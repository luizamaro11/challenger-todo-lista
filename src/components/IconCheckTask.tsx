import { Circle, CheckCircle } from 'phosphor-react';

interface CheckProps {
    check: boolean
}

export function IconCheckTask({ check }: CheckProps) {
    if (check) {
        return <CheckCircle color='#5e60ce' weight='fill' size={24} />
    }
    return <Circle size={24} />
}