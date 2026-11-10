"use client";

import { useState } from "react";

const PRESETS = [500, 1000, 2000, 5000];
const BKASH_NUMBER = "01347351468";
const WHATSAPP_URL = "https://wa.me/8801729165479";

const taka = (n: number) => "৳" + n.toLocaleString("bn-BD");

export default function OnudanForm() {
  const [amount, setAmount] = useState("1000");
  const [method, setMethod] = useState<"bkash" | "bank">("bkash");
  const [copied, setCopied] = useState(false);

  const amountNum = Number(amount);
  const validAmount = Number.isFinite(amountNum) && amountNum > 0;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(BKASH_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked; number is visible to copy manually
    }
  };

  return (
    <div className="donate-form">
      <fieldset className="step">
        <legend><span className="step-num">১</span> অনুদানের পরিমাণ</legend>
        <div className="amount-chips">
          {PRESETS.map((n) => (
            <button
              key={n}
              type="button"
              className="chip"
              aria-pressed={amount === String(n)}
              onClick={() => setAmount(String(n))}
            >
              {taka(n)}
            </button>
          ))}
        </div>
        <label htmlFor="amount" className="field-label">অথবা নিজের পরিমাণ লিখুন (টাকা)</label>
        <div className="amount-input">
          <span aria-hidden="true">৳</span>
          <input
            id="amount"
            type="number"
            inputMode="numeric"
            min={1}
            step="any"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

      </fieldset>

      <fieldset className="step">
        <legend><span className="step-num">২</span> টাকা পাঠান</legend>
        <div className="segmented" role="radiogroup" aria-label="পেমেন্ট মাধ্যম">
          {(["bkash", "bank"] as const).map((m) => (
            <label key={m} className={method === m ? "active" : ""}>
              <input
                type="radio"
                name="method"
                value={m}
                checked={method === m}
                onChange={() => setMethod(m)}
              />
              {m === "bkash" ? "বিকাশ" : "ব্যাংক (বাংলা QR)"}
            </label>
          ))}
        </div>

        {method === "bkash" ? (
          <div className="pay-panel">
            <p>
              নিচের বিকাশ নম্বরে {validAmount ? <strong>{taka(amountNum)}</strong> : "অনুদান"} মার্চেন্ট
              পেমেন্ট করুন, অথবা QR কোডটি স্ক্যান করুন।
            </p>
            <div className="pay-number">
              <span>{BKASH_NUMBER}</span>
              <button type="button" className="btn btn-ghost btn-sm" onClick={copyNumber}>
                {copied ? "কপি হয়েছে ✓" : "নম্বর কপি করুন"}
              </button>
            </div>
            <img src="/money/qr.jpeg" alt="বিকাশ পেমেন্টের QR কোড" className="pay-qr" loading="lazy" />
          </div>
        ) : (
          <div className="pay-panel">
            <p>
              যেকোনো মোবাইল ব্যাংকিং বা ব্যাংকিং অ্যাপ থেকে ইসলামী ব্যাংকের এই বাংলা QR কোডটি স্ক্যান করে{" "}
              {validAmount ? <strong>{taka(amountNum)}</strong> : "অনুদান"} পাঠান।
            </p>
            <p className="placeholder">[ব্যাংক একাউন্টের নাম, নম্বর ও শাখা এখানে যোগ করুন]</p>
            <img src="/money/image.png" alt="ইসলামী ব্যাংক বাংলা QR — ডিজিটাল দান বাক্স" className="pay-qr" loading="lazy" />
          </div>
        )}
      </fieldset>

      <fieldset className="step">
        <legend><span className="step-num">৩</span> আমাদের জানান</legend>
        <p>
          টাকা পাঠানোর পর ট্রানজেকশন আইডি (TrxID) বা যে একাউন্ট থেকে পাঠিয়েছেন তার নম্বর, আপনার নাম ও
          অনুদানের খাত (যাকাত, সাদাকা ইত্যাদি) হোয়াটসঅ্যাপে পাঠিয়ে দিন। আমরা যাচাই করে রশিদ পাঠাব।
        </p>
        <a href={WHATSAPP_URL} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">
          হোয়াটসঅ্যাপে জানান
        </a>
      </fieldset>
    </div>
  );
}
