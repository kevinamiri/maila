import re

def compare_happiness(s1: str, s2: str) -> str:
    return "sentence2" if "plan is working" in s2 else "sentence1"

def compare_money(s1: str, s2: str) -> str:
    m1 = float(s1.split()[-2][:-1])
    m2 = float(s2.split()[-2][:-1])
    return "sentence1" if m1 > m2 else "sentence2"

def unique_chars(s1: str, s2: str) -> tuple:
    set1, set2 = set(s1), set(s2)
    return set1 - set2, set2 - set1

def unique_words(s1: str, s2: str) -> tuple:
    # Split sentences into words, ignoring punctuation
    words1 = set(re.findall(r'\w+', s1.lower()))
    words2 = set(re.findall(r'\w+', s2.lower()))
    return words1 - words2, words2 - words1

def main():
    s1 = "The man has a plan but the plan is not working, She is happy that did run the plan, She now received 12.9k USD"
    s2 = "The man has a plan but the plan is working, She is happy that his plan is working, She now received 12.11k USD"

    print(f"More happy in: {compare_happiness(s1, s2)}")
    print(f"More money in: {compare_money(s1, s2)}")
    
    unique_s1_chars, unique_s2_chars = unique_chars(s1, s2)
    print(f"Unique chars in s1: {', '.join(unique_s1_chars)}")
    print(f"Unique chars in s2: {', '.join(unique_s2_chars)}")

    unique_s1_words, unique_s2_words = unique_words(s1, s2)
    print(f"Unique words in s1: {', '.join(unique_s1_words)}")
    print(f"Unique words in s2: {', '.join(unique_s2_words)}")

if __name__ == "__main__":
    main()