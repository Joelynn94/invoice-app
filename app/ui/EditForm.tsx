"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateInvoice } from "@/app/lib/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}

export default function EditForm() {
  const [state, formAction] = useFormState(updateInvoice, initialState);
  return (
    <form action={formAction}>
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

// const schema = z.object({
//   status: z.string().min(1),
//   description: z.string().min(1),
//   paymentDue: z.string().min(1),
//   paymentTerms: z.number().int().positive(),
//   clientName: z.string().min(1),
//   clientEmail: z.string().email(),
//   senderAddress: z.object({
//     street: z.string().min(1),
//     city: z.string().min(1),
//     postCode: z.string().min(1),
//     country: z.string().min(1),
//   }),
//   clientAddress: z.object({
//     street: z.string().min(1),
//     city: z.string().min(1),
//     postCode: z.string().min(1),
//     country: z.string().min(1),
//   }),
//   items: z.array(
//     z.object({
//       name: z.string().min(1),
//       quantity: z.number().int().positive(),
//       price: z.string().min(1),
//     })
//   ),
// });
