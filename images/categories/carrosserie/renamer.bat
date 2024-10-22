@echo off
setlocal enabledelayedexpansion
set i=1
for %%f in (*.jpg) do (
    ren "%%f" "!i!_temp.jpg"
    set /a i+=1
)

set i=1
for %%f in (*_temp.jpg) do (
    ren "%%f" "!i!.jpg"
    set /a i+=1
)
