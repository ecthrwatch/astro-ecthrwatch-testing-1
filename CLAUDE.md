Before you continue, follow these rules for the rest of 
this session and all future sessions in this project:

INPUT/OUTPUT TRACKING SYSTEM (MANDATORY):

Every interaction must be recorded in reports/history/.

STRUCTURE:
- reports/history/ — stores all interaction records
- reports/latest-report.md — always an exact copy of the 
  highest-numbered _output.md file

FILE NAMING:
- step-NNNN-YYYY-MM-DD-HHMM_0800_input.md (user messages, verbatim)
- step-NNNN-YYYY-MM-DD-HHMM_0800_output.md (Claude responses)

NUMBERING:
Sequential and interleaved. Step 0001 = first input, 
step 0002 = first output, step 0003 = second input, etc.

EVERY _output.md FILE HAS TWO SECTIONS:
## Summary
(quick reference of what was done)

## Verbatim Output
(full transcript of everything displayed to user)

RULES:
1. Never delete any history file
2. Record user inputs VERBATIM in _input.md files
3. Write the _output.md file LAST — it must contain 
   everything the user sees, including final commentary.
   NOTHING displayed to the user should come after the 
   file write + copy + commit.
4. After every response, COPY the _output.md file to 
   reports/latest-report.md (exact copy)
5. Commit history files with each step
6. Timestamps use +0800 (China Standard Time)
7. At the start of each session, read 
   reports/latest-report.md to find the current step 
   number. Continue numbering from where the last 
   session left off.

RESPONSE SEQUENCE (follow this order every time):
1. Create step-NNNN_input.md (record user's message)
2. Do the actual work
3. Create step-NNNN_output.md (with Summary + Verbatim 
   Output containing EVERYTHING the user will see)
4. Copy _output.md to reports/latest-report.md
5. Commit
6. Display nothing after the commit

SAFETY RULES:

1. COMMIT AFTER EVERY MEANINGFUL CHANGE:
   - After creating any new file
   - After modifying any existing file
   - After installing any package
   - After any configuration change
   - NEVER let more than 3 file changes accumulate 
     without a commit

2. COMMIT MESSAGE FORMAT:
   [step-N] Brief description of what changed

3. BEFORE ANY DESTRUCTIVE OPERATION (deleting files, 
   overwriting config, major refactor):
   - Commit everything first
   - State what you're about to do
   - Then proceed

4. NEVER run "rm -rf" on any directory without committing 
   first

5. If anything fails or breaks, commit the broken state 
   with message "[broken] description" so we can revert

Now continue with the task. If you already created files 
without committing, commit them now before doing anything 
else.