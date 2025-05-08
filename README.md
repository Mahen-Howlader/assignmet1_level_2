
## 1) TypeScript-এ interface এবং type এর মধ্যে পার্থক্য কী?
TypeScript-এ `interface` এবং `type` উভয়ই অবজেক্টের টাইপ নির্ধারণ করতে ব্যবহৃত হয়, তবে তাদের মধ্যে কিছু মূল পার্থক্য রয়েছে। 
### ১. **সিনট্যাক্স এবং ব্যবহার**
- **`interface`**:
  - শুধুমাত্র অবজেক্ট বা ক্লাসে ব্যবহৃত হয়।
  - `extends` কীওয়ার্ড ব্যবহার করে অন্য ইন্টারফেসের সাথে মার্জ বা extends  করা যায়।
  - উদাহরণ:
    ```typescript
    interface Person {
        name: string;
        age: number;
    }
    interface Employee extends Person {
        job: string;
    }
    ```
- **`type`**:
  - অবজেক্ট ছাড়াও যেকোনো টাইপ (Primitive, Union, Tuple, Function,) বর্ণনা করতে পারে।
  - `&` (intersection) বা `|` (union) ব্যবহার করে টাইপগুলো কম্বাইন করা যায়।
  - উদাহরণ:
    ```typescript
    type ID = string | number;
    type Person = {
        name: string;
        age: number;
    };
    type Employee = Person & { job: string };
    ```

### ২. **মার্জিং (Declaration Merging)**
- **`interface`**:
  - একই নামে একাধিক ইন্টারফেস ডিক্লেয়ার করলে সেগুলো স্বয়ংক্রিয়ভাবে মার্জ হয়।
  - উদাহরণ:
    ```typescript
    interface User {
        name: string;
    }
    interface User {
        age: number;
    }
    // ফলাফল: User = { name: string; age: number }
    ```
- **`type`**:
  - টাইপের ক্ষেত্রে মার্জিং সমর্থন করে না। একই নামে আরেকটি `type` ডিক্লেয়ার করলে ত্রুটি দেবে।
  - তবে, ইন্টারসেকশন (`&`) ব্যবহার করে ম্যানুয়ালি কম্বাইন করা যায়।

### ৩. **ইউনিয়ন এবং প্রিমিটিভ টাইপ**
- **`interface`**:
  - ইউনিয়ন টাইপ বা প্রিমিটিভ টাইপ (যেমন `string | number`) সমর্থন করে না।
  - শুধু অবজেক্ট বা ক্লাসের জন্য উপযুক্ত।
- **`type`**:
  - Union , intersection, Primitive, type,function ইত্যাদি সব ধরনের টাইপ বর্ণনা করতে পারে।
  - উদাহরণ:
    ```typescript
    type Status = "success" | "error" | "loading";
    type Tuple = [string, number];
    ```

### ৪. **ক্লাসের সাথে ব্যবহার**
- **`interface`**:
  - ক্লাসের ইমপ্লিমেন্টেশনের জন্য সরাসরি `implements` কীওয়ার্ড ব্যবহার করা যায়।
  - উদাহরণ:
    ```typescript
    interface Printable {
        print(): void;
    }
    class Document implements Printable {
        print() { console.log("Printing..."); }
    }
    ```
- **`type`**:
  - ক্লাসের সাথে `implements` ব্যবহার করা যায়, তবে এটি অবজেক্ট টাইপ হতে হবে।
  - উদাহরণ:
    ```typescript
    type Printable = {
        print(): void;
    };
    class Document implements Printable {
        print() { console.log("Printing..."); }
    }
    ```

### ৫. **পারফরম্যান্স এবং রিডেবিলিটি**
- **`interface`**:
  - সাধারণত অবজেক্ট-ভিত্তিক কোডের জন্য বেশি পঠনযোগ্য এবং ডেডিকেটেড সিনট্যাক্স রয়েছে।
  - বড় প্রজেক্টে, যেখানে মার্জিং প্রয়োজন (যেমন লাইব্রেরি ডেফিনিশন), ইন্টারফেস পছন্দনীয়।
- **`type`**:
  - বেশি নমনীয়, বিশেষ করে জটিল টাইপ (Union , intersection) এর জন্য।
  - ছোট বা জটিল টাইপ ডেফিনিশনের জন্য প্রায়ই ব্যবহৃত হয়।

### কখন কোনটি ব্যবহার করবেন?
- **`interface`** ব্যবহার করুন যদি:
  - আপনি অবজেক্ট বা ক্লাসের আকৃতি বর্ণনা করছেন।
  - ডিক্লারেশন মার্জিং প্রয়োজন (যেমন লাইব্রেরি বা মডিউল এক্সটেনশন)।
  - ক্লাসের সাথে `implements` ব্যবহার করছেন।
- **`type`** ব্যবহার করুন যদি:
  - Primitive, Union, Tuple, intersection Type দরকার।
  - জটিল বা নমনীয় টাইপ কম্পোজিশন প্রয়োজন।
  - আপনি একটি নির্দিষ্ট টাইপের অ্যালিয়াস তৈরি করতে চান।

### উদাহরণে পার্থক্য
```typescript
// Interface
interface User {
    id: number;
    name: string;
}
interface User {
    email: string;
}
const user: User = { id: 1, name: "Alice", email: "alice@example.com" }; // মার্জ হয়েছে

// Type
type ID = string | number;
type UserType = {
    id: ID;
    name: string;
} & { email: string };
const userType: UserType = { id: "1", name: "Alice", email: "alice@example.com" };
```
