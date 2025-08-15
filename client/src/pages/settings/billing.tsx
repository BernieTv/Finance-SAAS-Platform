import { Separator } from '@/components/ui/separator';

const Billing = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>
      <Separator />

      <div className="w-full">
        {/* Current Plan */}
        {/* Upgrade Options */}
      </div>
    </div>
  );
};

export default Billing;
