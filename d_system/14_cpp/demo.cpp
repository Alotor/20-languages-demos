#include <iostream>
#include <vector>

using namespace std;

main() {
    vector< vector<int> > vTest;
    vector<int> vA, vB;
    vector< vector<int> >::iterator iterLevel1;
    vector<int>::iterator iterLevel2;

    vA.push_back(10); vA.push_back(20); vA.push_back(30);
    vB.push_back(100); vB.push_back(200); vB.push_back(300);

    vTest.push_back(vA); vTest.push_back(vB);

    cout << endl << "Using Iterator:" << endl;

    for(iterLevel1=vTest.begin(); iterLevel1 != vTest.end(); iterLevel1++) {
        for(iterLevel2=(*iterLevel1).begin();
            iterLevel2 != (*iterLevel1).end();
            iterLevel2++) {
            cout << *iterLevel2 << endl;
        }
    }
}

