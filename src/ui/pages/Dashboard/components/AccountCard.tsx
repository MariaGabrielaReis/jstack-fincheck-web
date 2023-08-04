import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../components/icons/bankAccountTypes";

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
}

export function AccountCard({ color, name, balance }: AccountCardProps) {
  return (
    <div
      className="p-4 bg-white rounded-xl h-48 flex flex-col justify-between border-b-4 border-b-teal-950"
      style={{ borderBottomColor: color }}
    >
      <div>
        <BankAccountTypeIcon type="INVESTMENT" />
        <span className="text-gray-700 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span className="text-gray-700 font-medium tracking-[-0.5px] block">
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
