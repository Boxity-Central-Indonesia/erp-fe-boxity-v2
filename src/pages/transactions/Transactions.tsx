import { Orders } from "./orders/orders"
import { Invoices } from "./invoices/invoices";
import { Payments } from "./payments/Payment";
import { DeliveryNotes } from "./deliveryNotes/DeliveryNotes";
import * as Tabs from "@radix-ui/react-tabs";


export const Transaction = () => {


    return (
        <>
            <section>
                <p className="text-2xl font-semibold mb-5">Manajemen pesanan</p>
                <div className="w-full bg-white rounded-md border border-gray-200">
                    <Tabs.Root defaultValue="orders">
                        <Tabs.List className="flex justify-start border-b mb-6" aria-label="Manage your account">
                            <Tabs.Trigger value="orders" className="focus:outline-none hover:border-primary focus:border-primary bg-white rounded-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-2 rounded-tl-md">
                                Pesanan
                            </Tabs.Trigger>
                            <Tabs.Trigger value="invoices" className="focus:outline-none hover:border-primary focus:border-primary bg-white rounded-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-2">
                                Faktur tagihan
                            </Tabs.Trigger>
                            <Tabs.Trigger value="payments" className="focus:outline-none hover:border-primary focus:border-primary bg-white rounded-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-2">
                                Pembayaran
                            </Tabs.Trigger>
                            <Tabs.Trigger value="delivery-notes" className="focus:outline-none hover:border-primary focus:border-primary bg-white rounded-none data-[state=active]:text-primary data-[state=active]:border-b-primary border-b-2">
                                Pengiriman barang
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="orders">
                            <Orders />
                        </Tabs.Content>
                        <Tabs.Content value="invoices">
                            <Invoices />
                        </Tabs.Content>
                        <Tabs.Content value="payments">
                            <Payments />
                        </Tabs.Content>
                        <Tabs.Content value="delivery-notes">
                            <DeliveryNotes/>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
            </section>
        </>
    )
}