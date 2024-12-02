import { Circle, CheckCircle } from 'phosphor-react';

interface CheckProps {
    check: boolean
}

export function IconCheckTask({ check }: CheckProps) {
    if (check) {
        return <CheckCircle size={24} />
    }
    return <Circle size={24} />
}