import ClickCounter from '../components/ClickCounter';

export interface ClickProps {
  count: number;
  name?: string;
  incrementCount?: () => number;
}

export interface ClickState extends ClickProps {}
